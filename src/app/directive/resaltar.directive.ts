// importante escrito en typeScript
import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive ({
    // tslint:disable-next-line:directive-selector
    selector: '[resaltar]'
})
export class ResaltarDirective implements OnInit {
   constructor( private elRef: ElementRef, private renderer: Renderer2 ) {
   }
   // optener el elemento donde tenemos aplicado nuestro atributo y darle estilos
  @Input  ('resaltar') plan = '' ;
   ngOnInit() {
        if ( this.plan === 'pagado' ) {
            this.renderer.setStyle(this.elRef.nativeElement, 'background', 'yellow' );
            this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold' );
        }
    }
}
