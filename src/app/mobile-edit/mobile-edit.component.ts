import { AfterContentInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mobile } from 'src/Models/Mobile';
import { Processor } from 'src/Models/Processor';
import { MobileService } from 'src/Services/mobile.service';

@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.scss'],
})
export class MobileEditComponent implements OnInit {
  mobileId: number;
  currentMobile: Mobile;
  isEditMode: boolean = false;
  @ViewChild('myForm') myForm: NgForm;

  constructor(
    private mobileService: MobileService,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let editmode = this.currentRoute.snapshot.queryParams['editMode'];
    if (editmode === '1') {
      this.isEditMode = true;
      this.mobileId = +this.currentRoute.snapshot.params['id'];
      this.currentMobile = this.mobileService.getMobileById(this.mobileId);
      console.log(this.currentMobile);
      setTimeout(() => {
        this.myForm.form.setValue({
          RAM: this.currentMobile.RAM,
          Photo: this.currentMobile.Photo,
          cashSize: this.currentMobile.Processor.CASH,
          name: this.currentMobile.Name,
          processorName: this.currentMobile.Processor.Name,
          processorType: this.currentMobile.Processor.Type,
        });
      });
    }
  }
  OnSubmit(form: NgForm) {
    let myForm = form.value;
    let newProcessor = new Processor(
      myForm.processorName,
      myForm.processorType,
      myForm.cashSize
    );
    let newMobile = new Mobile(
      myForm.Photo,
      myForm.name,
      myForm.RAM,
      newProcessor
    );
    // add Mobile to mobile Services
    this.mobileService.AddMobile(newMobile);
    this.router.navigate(['/']);
  }

  OnUpdate(myForm: NgForm) {
    let Form = myForm.form.value;
    let EditedProcessor: Processor = new Processor(
      Form['processorName'],
      Form['processorType'],
      Form['cashSize']
    );
    let EditedMobile = new Mobile(
      Form['Photo'],
      Form['name'],
      Form['RAM'],
      EditedProcessor
    );
    this.mobileService.UpdateMobile(this.mobileId, EditedMobile);
    this.router.navigate(['/']);
  }
}
