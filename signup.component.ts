import { Component } from '@angular/core'
    ;
@Component({
    selector:
        'app-signup'
    ,
    templateUrl:
        './signup.component.html'
    ,
    styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    name: string =
        ''
        ;
    email: string =
        ''
        ;
    password: string =
        ''
        ;
    errorMessage: string =
        ''
        ;
    signedUp: boolean = false;
    signup() {
        // Basic validation
        if (!this.name || !this.email || !this.password) {
            this.errorMessage =
                'Please fill in all fields.'
                ;
            return;
        }
// Here you would implement signup logic, e.g., sending
data to backend
        // Simulating successful signup for demonstration purposes
        this.signedUp = true;
    }
}