//

// src/app/shared/stripeHelper.ts

import stripe from "../../../config/stripe";
import ApiError from "../../../errors/ApiErrors";
import prisma from "../../../shared/prisma";

export const getOrCreateAddMoneyCustomer = async (
  userId: string,
  paymentMethodId?: string,
) => {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    throw new ApiError(404, "User not found");
  }

  let customerId = user.addMoneyCustomerId;

  if (!customerId) {
    // ✅ Create new customer in Stripe
    const customer = await stripe.customers.create({
      name: `${user.firstName} ${user.lastName ?? ""}`,
      email: user.email,
    });

    customerId = customer.id;

    // ✅ Save new customerId into addMoneyCustomerId
    await prisma.user.update({
      where: { id: userId },
      data: { addMoneyCustomerId: customerId },
    });

    // ✅ If a payment method is provided, attach it
    if (paymentMethodId) {
      await stripe.paymentMethods.attach(paymentMethodId, {
        customer: customerId,
      });

      await stripe.customers.update(customerId, {
        invoice_settings: { default_payment_method: paymentMethodId },
      });
    }
  }

  return customerId;
};
