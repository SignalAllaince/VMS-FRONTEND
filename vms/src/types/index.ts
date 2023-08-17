export interface VisitorProps {
  name: string;
  date: string;
  checkInTime: string;
  checkOutTime: string;
  email: string;
  meeting_purpose: string;
  hostName: string;
  hostEmail:string;
}

export interface FrequenlyVistedArea{
  area: string;
  date: string;
  number_of_visits: number;
}

export interface AdminList{
  admin_name:string;
  email_address:string;
  admin_type:string;
  status:string;
}
