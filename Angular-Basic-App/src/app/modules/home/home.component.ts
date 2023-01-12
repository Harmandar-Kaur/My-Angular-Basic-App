import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, of, Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component( {
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy{
  title = 'my-course-app';
  headerTitle = 'This is a Header';
  isHeaderVisible = true;

  name : string | undefined;
  lastname : string | undefined;

  formGroup: FormGroup | undefined;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  //ngOnInit(): void {
  //this.formGroup = this.formBuilder.group( controlsConfig: {
  //name: undefined,
  //lastname: undefined,
  //});
  //}

  ngOnInit(): void {

    this.formGroup = this.formBuilder.group(  {
      name: [undefined, Validators.required],
      lastname: undefined
    });

    this.observeFormChanges();
    this.displayObservableNumbers();
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.valid);
    console.log(this.formGroup?.value);

    //console.log(this.name);
    //console.log(this.lastname);
  }


  capitalText = 'capital text';
  isoDate = '2023-01-09T14:17:00.000Z';

  amount = 99;
  num = 56.78;

  birthday : Date = new Date(  1999,  7,  27);

  observable$: Observable<number> = of(1, 2, 3, 4, 5);

  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;
  private displayObservableNumbers() : void {
    this.subscription = this.observable$.subscribe((value) => {
      console.log("Here I Am!");
      console.log(value);
      //this.observable$.subscribe((value) => {
      //console.log("Here I Am!");
      //console.log(value);
    })
  }


  private observeFormChanges() : void {
    this.formSubscription = this.formGroup?.valueChanges.subscribe((val) => {
      console.log(val);
    })
    //this.formGroup?.valueChanges.subscribe((val) => {
    //console.log(val);
    //)
  }

  goToProfileAndLogCabbage() : void {
    console.log('Cabbage');
    this.router.navigate(['/profile']);
  }

  ngOnDestroy() : void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }
}
