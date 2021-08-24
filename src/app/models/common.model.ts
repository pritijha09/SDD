export class State {
  public name : string | undefined;
  public id!: number;
}

export class Districts {
  districtId!: number;
  districtName: string | undefined;
  districtCode: number | undefined;
  mddsCode: number | undefined;
  blockData: BlockDataModel[] | undefined;
  facilityData: FacilityDataModel[] | undefined
}

export class BlockDataModel {
  healthBlockId: number | undefined;
  healthBlockCode: number | undefined;
  healthBlockName: string | undefined;
  districtId: number | undefined;
  talukaId: number | undefined;
  mddsCode: number | undefined;
}

export class FacilityDataModel {
  healthFacilityId: number | undefined;
  healthFacilityCode: number | undefined;
  districtId: number | undefined;
  talukaId: number | undefined;
  healthBlockId: number | undefined;
  healthFacilityTypeId: number | undefined;
  healthFacilityTypeData: {
    facilityTypeId: number | undefined;
    facilityTypeName: string | undefined;
  } | undefined
}

export class Roles {
  roleId!: number;
  roleName!: string;
}


