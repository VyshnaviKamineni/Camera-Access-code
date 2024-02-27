import { Component } from '@angular/core'
    ;
@Component({
    selector:
        'app-camera'
    ,
    templateUrl:
        './camera.component.html'
    ,
    styleUrls: ['./camera.component.css']
})
export class CameraComponent {
    capturedImage: string | null = null;
    cityInfo: string | null = null;
    frontCamera: boolean = true; // Initially front camera is active
    toggleCamera() {
        // Logic to toggle between front and back camera
        this.frontCamera = !this.frontCamera;
    }
    takePicture() {
// Logic to take a picture using the active camera
// After taking the picture, update capturedImage variable with
the image URL
        // For demonstration purposes, setting a dummy image URL
        this.capturedImage =
            '<div>
            < h2 > Camera < /h2>
            < button(click)=
        "toggleCamera()" > Toggle Camera < /button>
            < button(click)=
        "takePicture()" > Take Picture < /button>
            < img * ngIf=
        "capturedImage"[src] =
            "capturedImage" alt =
                "Captured
Image">
            < p * ngIf=
        "cityInfo" > City: { { cityInfo } } </p>
            < /div>
        '
            ;
        // Call function to capture location and fetch city information
        this.captureLocation();
    }
    captureLocation() {
        // Logic to capture user's current location and fetch city
        information
        // For demonstration purposes, setting a dummy city information
        this.cityInfo =
            'New York'
            ;
    }
}
