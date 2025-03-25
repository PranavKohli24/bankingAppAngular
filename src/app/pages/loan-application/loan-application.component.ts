import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiResponseModel, Application, Loan } from '../../model/application.model';
import { MasterService } from '../../service/master.service';


@Component({
  selector: 'app-loan-application',
  imports: [FormsModule],
  templateUrl: './loan-application.component.html',
  styleUrl: './loan-application.component.css'
})
export class LoanApplicationComponent {
  application:Application=new Application();
  loan:Loan=new Loan();

  masterSrv=inject(MasterService)

  addLoan(){
    const strObj=JSON.stringify(this.loan);
    const newObj=JSON.parse(strObj);

    this.application.Loans.unshift(newObj);

    this.loan=new Loan()
  }

  
  onSubmit(){
    this.masterSrv.addNewApplication(this.application).subscribe((res:any)=>{
      if(res.result){
        alert('loan application success')
      }else{
        console.log(res)
        alert(res.message)
      }

    },error=>{
      alert("hello"+error)
    })
  }


}
