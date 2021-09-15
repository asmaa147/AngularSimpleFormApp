import {FormGroup} from "@angular/forms";

export function validatePassword(formGroup: FormGroup): {[key: string] : boolean} | null {
    // console.log("password Validator is" , formGroup);

    const Passward = formGroup.controls.Passward;
    const ConfirmPassward = formGroup.controls.ConfirmPassward;

    if(Passward.value !== ConfirmPassward.value && Passward.dirty && ConfirmPassward.dirty){
        ConfirmPassward.setErrors( {invaildPassward : true} )
    }
    return null;
}