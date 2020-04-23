import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup; // Form with the data in the sign up page
  showLoadingSpinnerForm = false; // Show the spnnier while loading data from other providers
  errorMessage: string; // If there's any errors sign in will be save in this property to display it

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Form set up
    this.signinForm = this.fb.group({
      username: ['', [ Validators.required, Validators.minLength(6) ]],
      pass: ['', [ Validators.required, Validators.minLength(6) ]]
    });
  }

  // Function handle the sign in in the platform
  onSignIn() {
    this.showLoadingSpinnerForm = true; // Show animation while getting data
    this.errorMessage = null; // Reset error
    this.authService.signInWithUserName(this.username.value, this.pass.value)
      .catch(err => {
        // Save error to display it dependin of the error
        if (err.code === 'auth/invalid-email') { this.errorMessage = '*No pudimos encontrar tu cuenta, verifica tu nombre de usuario.'; }
        if (err.code === 'auth/wrong-password') { this.errorMessage =  '*La contraseña es incorrecta. Vuelve a intentarlo o haz clic en "¿Olvidaste tu contraseña?" para restablecerla.'; }
      })
      // If it was a successfull sign in redirect to page
      .then(u => {
        if (u && !this.errorMessage) {
          this.router.navigate([`/${u.username}`]);
          this.signinForm.reset();
        }
        this.showLoadingSpinnerForm = false; // Stop animation once data is loaded
      });
  }

  // Getters & setters for the form
  get username(): AbstractControl { return this.signinForm.get('username'); }
  get pass(): AbstractControl { return this.signinForm.get('pass'); }

}
