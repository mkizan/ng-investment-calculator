import { Component, Input, input } from '@angular/core';
import { InvestmentResultsData } from '../investment-results-data.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // results = input<InvestmentResultsData[]>();

  @Input() results?: InvestmentResultsData[];
}
