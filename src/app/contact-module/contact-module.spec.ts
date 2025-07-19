import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact-module';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ContactComponent (ahora Registro)', () => { 
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ContactComponent,
        FormsModule,
        RouterTestingModule.withRoutes([]) // Para pruebas de navegación
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form data', () => {
    expect(component.registroData).toEqual({
      nombre: '',
      email: '',
      telefono: ''
    });
  });

  it('should validate nombre field', async () => {
    const nombreInput = fixture.nativeElement.querySelector('input[name="nombre"]');
    
    // Campo vacío
    nombreInput.value = '';
    nombreInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    const form = fixture.nativeElement.querySelector('form');
    expect(form.classList).toContain('ng-invalid');
  });

  it('should validate email field', async () => {
    const emailInput = fixture.nativeElement.querySelector('input[name="email"]');
    
    // Email inválido
    emailInput.value = 'no-es-un-email';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    const form = fixture.nativeElement.querySelector('form');
    expect(form.classList).toContain('ng-invalid');
    
    // Email válido
    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(form.classList).toContain('ng-valid');
  });

  it('should submit form when valid', () => {
    spyOn(component, 'onSubmit');
    spyOn(router, 'navigate');
    
    // Rellenar formulario válido
    component.registroData = {
      nombre: 'Juan Perez',
      email: 'test@example.com',
      telefono: '123456789'
    };
    
    fixture.detectChanges();
    
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit'));
    
    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should navigate to home after submit', () => {
    spyOn(router, 'navigate');
    
    component.onSubmit();
    
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  });
});