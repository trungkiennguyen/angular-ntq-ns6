import { AbstractControl, ValidationErrors } from '@angular/forms';

export function UserNameValidators(control: AbstractControl) {
    if (!control.value.includes('@ntq-solution.com')) {
        return { UserNameValidators: true };
    }
    return null;
}