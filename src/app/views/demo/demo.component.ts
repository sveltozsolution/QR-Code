import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";



@Component({
    selector: 'app-demo',
    templateUrl: './demo.component.html',
    // providers: [WebService, HttpClient]

})

export class DemoComponent implements OnInit {
    id: string;
    
    constructor(private router: ActivatedRoute,private route:Router) { }

    ngOnInit() {
        debugger;   
        const id1: string = this.router.snapshot.params.id;
        
         this.id = "5a978a08d81ac815f84ef999";
         this.route.navigateByUrl('demo/'+ this.id);
        alert(this.id);
    }
}
