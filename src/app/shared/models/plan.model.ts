// Interface will be how a feature from the plan will be
export interface IFeature {
  id: string;
  name: string;
  description: string;
  price: number;
}

// Funtion will return a empty featur
export const newFeature = (): IFeature => {
  return {
    id: '',
    name: '',
    description: '',
    price: null
  };
};

// Interfacy will resemble a plan
export interface IPlan {
  id: string;
  name: string;
  price: number;
  features: IFeature[];
}

// Function returns a empty plan
export const newPlan = (): IPlan => {
  return {
    id: '',
    name: '',
    price: null,
    features: [
      newFeature()
    ]
  };
};

