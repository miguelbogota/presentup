import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  features: [];
  plans: [];

  constructor() { }

  ngOnInit(): void {
  }

  // Function checks if the feature is inside a plan
  isFeatureInPlan(/* feature: IFeature, plan: IPlan */): boolean {
    return false;
    /*
    let isFeatureInside = false;
    plan.features.forEach(feat => {
      if (feat.id === feature.id) { isFeatureInside = true; }
    });
    return isFeatureInside;
    */
  }

}
