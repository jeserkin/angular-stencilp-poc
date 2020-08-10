import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stencil-poc-card',
  templateUrl: './stencil-poc-card.component.html',
  styleUrls: ['./stencil-poc-card.component.css']
})
export class StencilPocCardComponent implements OnInit, AfterViewInit {

  @ViewChild('card')
  veeraCard: ElementRef<HTMLVeeraCardElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.veeraCard.nativeElement.data = {
      template_type: 'single_column',
      header: {
        icon: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAA
        Cxjwv8YQUAAAHiSURBVHgBtZU/TsMwFMafkyIxwg3KxoBo2ComeoRuCEHrnoCUCzS9QBtOgEEVcxmZEBMdAxyAsjFmRKDWPDd28b9WWfokN7Hj/Pr5+X0OwIaC+AZbNO5xI
        HQGvHnP0sw7p9Ntcw4pAZLesUHffh6ugCbiPkD4QVR/fM8mXx4ow9ttbCdRdAyv2cuzPifwQbH1Q+BHOJSHQJ7OaBx5oMvgwJMWveqBLxU6dMQGiRijNK7OEIy3O5iWRoWQ
        mg01YSRRaSGroCp0uGxrQ8GDYikkxsu0AvPUnshYOsXnrAy0YHHBUjnmXfypzlEZKjQAIqcEcwjlAveENwrlMi5oTLF7gwNZgA9Raa5vFL6wJ66Ylo91UCbL06hjHY6LYVx
        Lza8Eb/nBBtQB63DVt5V6lDtQEYENni3UQq7637Kt6ov4ATcMxcII4X9pGeFTihXQwfIagqxz3f5BGahH6WL5I5aOZRU4DiVloFY4ObUdKpQHxTJLQ4UBmvZGCROp+pUskM
        6DhxLMvHiBDG0TiZgDtIU4dOn1EjxiQ4rw23XQQhHv4LzIdqjvrDGq4px2GSn+2YGq5dsORaWXvgPMMYgF9xa/ZqJcLt85FZ0vyFs2GR9G9V2sz30fVM7JalH9E+GnPuhG4
        w+IQBlC1S2R+AAAAABJRU5ErkJggg==`,
        title: 'Health'
      },
      body: [
        {
          content: {
            'Coronavirus information': null,
            'How to behave when sick': null,
            'About work accident': null
          },
          href: '#'
        }
      ],
      footer: [
        {
          title: 'Sign in to see your health profile',
          href: '#'
        }
      ]
    };
  }
}
