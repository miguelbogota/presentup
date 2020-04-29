import { Component, OnInit } from '@angular/core';
import { IPlan, IFeature } from 'src/app/shared/models/plan.model';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  // Call db for the plans and features
  feat1: IFeature = { id: '1', name: 'pagina', description: 'creacion de la pagina web/tarjeta digital', price: 12000 };
  feat2: IFeature = { id: '2', name: 'portfolio', description: 'mostrar un portafolio digintal', price: 13000 };
  feat3: IFeature = { id: '3', name: 'no ads', description: 'remover ads de la tarjeta', price: 6000 };
  feat4: IFeature = { id: '4', name: 'podcasr', description: 'mostrar podcast y transmitirlo', price: 8000 };
  features: IFeature[] = [this.feat1, this.feat2, this.feat3, this.feat4];
  plans: IPlan[] = [
    { id: '1', name: 'free', price: 0, features: [this.feat1, this.feat2] },
    { id: '2', name: 'premium', price: 29900, features: [this.feat1, this.feat2, this.feat3, this.feat4] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Function checks if the feature is inside a plan
  isFeatureInPlan(feature: IFeature, plan: IPlan): boolean {
    let isFeatureInside = false;
    plan.features.forEach(feat => {
      if (feat.id === feature.id) { isFeatureInside = true; }
    });
    return isFeatureInside;
  }

}
