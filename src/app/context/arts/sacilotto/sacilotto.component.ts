import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

class Section2D {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public start: number,
    public end: number
  ) {}

  render(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.arc(this.x, this.y, this.radius, this.start, this.end);
    ctx.lineTo(this.x, this.y);
    ctx.closePath();
  }
}

interface Sacilotto {
  amount: number;
  gut: number;
  margin: number;
  background: string;
  foreground: string;
}

@Component({
  selector: 'app-sacilotto',
  templateUrl: './sacilotto.component.html',
  styleUrls: ['./sacilotto.component.scss']
})
export class SacilottoComponent implements OnInit, AfterViewInit {
  @ViewChild("canvas") canvasRef: ElementRef;

  private sections: Section2D[] = [];
  private ctx: CanvasRenderingContext2D;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.form = this.fb.group({
      amount: [6],
      gut: [5],
      margin: [10],
      background: ["#ffffff"],
      foreground: ["#ff0000"],
    });
  }
  
  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext("2d");
    this.update();
  }

  update() {
    const settings: Sacilotto = this.form.value as Sacilotto;

    this.clear(settings);
    this.generate(settings);
    this.render(settings);
  }

  private render(settings: Sacilotto) {
    this.ctx.fillStyle = settings.foreground;
    this.sections.forEach(el => {
      el.render(this.ctx);
      this.ctx.fill();
    });
  }

  private clear(settings: Sacilotto) {
    this.ctx.fillStyle = settings.background;
    this.ctx.strokeStyle = "black";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.strokeRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  generate(settings: Sacilotto): void {
    const size = Math.min(this.ctx.canvas.width, this.ctx.canvas.height);
    const sizeWithoutGuts = size - (settings.amount+1)*settings.gut - 2*settings.margin;
    const sectionSize = sizeWithoutGuts/(2*settings.amount);
    const sectionWithGuts = sectionSize*2+settings.gut;

    this.sections = [];
    for(let i=0; i<settings.amount; i++) {
      for(let j=0; j<settings.amount; j++) {
        const section = new Section2D(
          settings.margin + settings.gut + sectionSize + i*sectionWithGuts, 
          settings.margin + settings.gut + sectionSize + j*sectionWithGuts, 
          sectionSize, 
          (i+j)*Math.PI/8, Math.PI*1.75+(i+j)*Math.PI/8);
        this.sections.push(section);
      }
    }
  }
}
