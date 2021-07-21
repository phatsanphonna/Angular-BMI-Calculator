import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  BMIValue: any = '';
  title = 'bmi-calculator';

  calculateBMI(weight: string, height: string) {
    if (weight == '' || height == '') {
      return
    }

    const value: string = (Number(weight) / ((Number(height) / 100) ** 2))
      .toFixed(2)

    this.BMIValue = `ค่า BMI ของคุณคือ ${value}`
  }
}
