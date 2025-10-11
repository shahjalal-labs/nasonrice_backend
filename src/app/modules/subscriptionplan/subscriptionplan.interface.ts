//
export interface ICreateSubscriptionPlan {
  name: string;
  amount: number;
  type: "one_time" | "subscription";
  interval?: "month" | "year";
  subscriptionTitleType: "MONTHLY" | "YEARLY";
  features: any; // or define a more specific type
}

export interface ISubscriptionPlanService {
  createSubscriptionPlanIntoDB: (data: ICreateSubscriptionPlan) => Promise<any>;
  getAllSubscriptionplanFromDB: () => Promise<any>;
  getSubscriptionplanByIdFromDB: (id: string) => Promise<any>;
  deleteSubscriptionplanFromDB: (id: string) => Promise<void>;
}
