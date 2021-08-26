import { Component, OnInit, DebugElement } from '@angular/core';
import { CoreHttpService } from '../core/services/coreHttpServices/core-http.service';
import { State, Districts, BlockDataModel, Roles, registerModel } from '../models/common.model';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../core/services/notification.service';
declare var $: any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  public registerPayload: registerModel = new registerModel();
public stateList: State[] = [];
  public districtList: any[] = [];
  public blockList: BlockDataModel[] = [];
  public roleList: Roles[] = [];
  public userList: any  = [];
  public facilityData: any = [];
  public isHideFacility: boolean = false;
  public facility: string = '';
  public subfacility: string = '';
  constructor(private coreHttp: CoreHttpService, private notifyService : NotificationService ) {


   }

   ngAfterViewInit(){
    this.getUserListDetails();
   }

  ngOnInit(): void {
    this.getRoleList();
    this.getStateList();
  }

  /** Method to get user list */
  getUserListDetails() {
    this.coreHttp.get('user/getAllUsers').subscribe(res => {
      this.userList = res.response;
      $('#userTable').DataTable();
    }, error=> {
      console.log(error)
      this.notifyService.showError(error.message)
    })
  }

  /** Method to get state list */
  getStateList() {
    this.coreHttp.get('states').subscribe(response => {
      this.stateList = response.response;
    }, error => {
      console.log(error);
      this.notifyService.showError(error.message)
    })
  }

  /** Method to get selected state */
  getSelectedStateId() {
    this.coreHttp.get(`district/${this.registerPayload.stateId}`).subscribe(response => {
      this.districtList = response.response.districts;
    }, error=> {
      console.log(error);
      this.notifyService.showError(error.message)
    })
  }

  /** Method to get selected role */
  getSelectedRole() {
    if(Number(this.registerPayload.roleId) != 1) {
      this.isHideFacility = false;
    } else {
      this.isHideFacility = true;
    }
  }

  /** Method to get select district */
  getSelecteddistrictList() {
    let data = this.districtList.find(ele => ele.districtId === Number(this.registerPayload.districtId));
    if(data.hasOwnProperty('blockData')) {
      this.blockList = data.blockData;
    } else {
      this.blockList = [];
    }

    if(data.hasOwnProperty('facilityData')) {
        this.facilityData = data.facilityData;
    } else {
      this.facilityData = [];
    }
  }

  /** Method to get role list */
  getRoleList(){
    this.coreHttp.get('roles').subscribe(res => {
      this.roleList = res.response;
    }, error => {
      console.log(error)
      this.notifyService.showError(error.message)
    })
  }

  /** Method for register User */
  onSubmit(ngForm: NgForm) {
    this.coreHttp.post('user/create', this.registerPayload).subscribe(res => {
     this.getUserListDetails();
      $('#registerModal').modal('toggle');
    }, error=> {
      console.log(error);
      this.notifyService.showError(error.message)
    })
  }
}
