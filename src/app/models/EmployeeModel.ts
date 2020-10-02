import {NgForm,FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms'

export class EmployeeModel{
    maPhongBan:number = 0;
    maChucVu:number = 0;
    trangThai:number = 0;
    hoTen:string = "";
    soDienThoai:string ="";
    mail:string ="";
    anhDaiDien:string ="";
    namSinh:Date = new Date();
    tenPhongBan:string = "";
    tenChucVu:string = "";

    formGroup:FormGroup = null;

    constructor()
    {
        var fb = new FormBuilder();
        this.formGroup = fb.group({});
        this.formGroup.addControl('maPhongBan', new FormControl('', Validators.required));
        this.formGroup.addControl('maChucVu', new FormControl('', Validators.required));
        this.formGroup.addControl('trangThai', new FormControl('', Validators.required));
        this.formGroup.addControl('hoTen', new FormControl('', Validators.required));
        this.formGroup.addControl('soDienThoai', new FormControl('', Validators.required));
        this.formGroup.addControl('mail', new FormControl('', Validators.required));
        this.formGroup.addControl('anhDaiDien', new FormControl('', Validators.required));
        this.formGroup.addControl('namSinh', new FormControl('', Validators.required));
        this.formGroup.addControl('tenPhongBan', new FormControl('', Validators.required));
        this.formGroup.addControl('tenChucVu', new FormControl('', Validators.required));
    }
}