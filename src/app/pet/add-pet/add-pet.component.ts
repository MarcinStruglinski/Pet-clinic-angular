import {Component, Input, OnInit} from '@angular/core';
import {Owner} from '../../owner/owner';
import {FormControl, FormGroup} from '@angular/forms';
import {RegisterService} from '../../auth/register/register.service';
import {OwnerService} from '../../owner/owner.service';
import {Router} from '@angular/router';
import {PetServiceService} from '../pet-service.service';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit  {
  myform: FormGroup;
  hasErrors = false;
  @Input()
  owner: Owner;


  constructor(private registerService: RegisterService,
              private ownerService: OwnerService,
              private router: Router,
              private peteSrvice: PetServiceService) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      owner: new FormControl(),
      birthDate: new FormControl(),
      name: new FormControl(),
      petType: new FormControl()
    });
  }

  sendForm() {
    const pet = this.myform.value;
    pet.owner = {
      id: this.owner.id
    };
    console.log(JSON.stringify(pet));

    this.peteSrvice.createPet(pet)
      .subscribe(d => {
        this.router.navigate(['/owners']);
      }, err => {
        this.hasErrors = true;
      });
  }
}
