import { Component, OnInit, DebugElement } from '@angular/core';
import { CoreHttpService } from '../core/services/coreHttpServices/core-http.service';
import { State, Districts, BlockDataModel, Roles } from '../models/common.model';
declare var $: any;
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
public stateList: State[] = [];
  public selectedStateId!: any;
  public districtList: Districts[] = [];
  public selecteddistrictId!: number;
  public blockList: BlockDataModel[] = [];
  public roleList: Roles[] = [];
  public userList: any  = [];
  constructor(private coreHttp: CoreHttpService ) {
    this.userList = [
      {
      "name": "jitendra",
      "gmail": "gangwarjitu392@gmail.com",
      "mobileNumber": "9301840199",
      "role": {
          "roleId": 2,
          "roleName": "DISTRICT"
      },
      "districtResponse": {
          "districtId": 7,
          "districtName": "Mayurbhanj",
          "districtCode": 7,
          "mddsCode": 365
      },
      "stateResponse": {
          "stateId": 21,
          "stateName": "ODISHA"
      }
  },
  {
      "name": "jitendra",
      "gmail": "gangwar392@gmail.com",
      "mobileNumber": "9301840190",
      "role": {
          "roleId": 1,
          "roleName": "CHO"
      },
      "districtResponse": {
          "districtId": 7,
          "districtName": "Mayurbhanj",
          "districtCode": 7,
          "mddsCode": 365
      },
      "stateResponse": {
          "stateId": 21,
          "stateName": "ODISHA"
      },
      "blockResponse": {
          "healthBlockId": 9,
          "healthBlockCode": 366,
          "healthBlockName": "BANGRIPOSI",
          "districtId": 7,
          "talukaId": 121,
          "mddsCode": 3489
      },
      "healthFacilityResponse": {
          "healthFacilityId": 1,
          "healthFacilityCode": 1260,
          "talukaId": 105
      }
  },
  {
      "name": "jitendra",
      "gmail": "gangwar1213392@gmail.com",
      "mobileNumber": "9301840191",
      "role": {
          "roleId": 4,
          "roleName": "BLOCK"
      },
      "districtResponse": {
          "districtId": 7,
          "districtName": "Mayurbhanj",
          "districtCode": 7,
          "mddsCode": 365
      },
      "stateResponse": {
          "stateId": 21,
          "stateName": "ODISHA"
      },
      "blockResponse": {
          "healthBlockId": 9,
          "healthBlockCode": 366,
          "healthBlockName": "BANGRIPOSI",
          "districtId": 7,
          "talukaId": 121,
          "mddsCode": 3489
      }
  }
];
this.roleList = [
  {
      "roleId": 4,
      "roleName": "BLOCK"
  },
  {
      "roleId": 1,
      "roleName": "CHO"
  },
  {
      "roleId": 2,
      "roleName": "DISTRICT"
  },
  {
      "roleId": 3,
      "roleName": "STATE"
  }
]
   }

   ngAfterViewInit(){
    $('#userTable').DataTable();
   }

  ngOnInit(): void {
    this.getUserListDetails();
    this.getRoleList();
  //  this.getStateList();
  }

  /** Method to get user list */
  getUserListDetails() {
    this.coreHttp.get('user/getAllUsers').subscribe(res => {
      console.log(res);
    }, error=> {
      console.log(error)
    })
  }

  /** Method to get state list */
  getStateList() {
    this.coreHttp.get('endpoint').subscribe(response => {
      this.stateList = response;
    }, error => {
      console.log(error);
    })
  }

  /** Method to get selected state */
  getSelectedStateId() {
    this.coreHttp.get(`endpoint/${this.selectedStateId}`).subscribe(response => {
      this.districtList = response.response.districts;
    }, error=> {
      console.log(error);
    })
  }

  /** Method to get select district */
  getSelecteddistrictList() {
    // this.districtList.find(ele => ele.districtId === this.selecteddistrictId).blockData
  }

  /** Method to get role list */
  getRoleList(){
    this.coreHttp.get('endpoint').subscribe(res => {
      console.log(res);
      this.roleList = res;
    }, error => {
      console.log(error)
    })
  }
}
