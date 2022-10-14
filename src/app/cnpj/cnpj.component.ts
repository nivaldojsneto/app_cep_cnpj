import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { CnpjService } from './cnpj.service';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.css']
})
export class CnpjComponent implements OnInit {

  buscacnpj: string = '';
  buscar: boolean = false;

  constructor(
    private cnpjService: CnpjService,
    private messageService: MessageService,
    private spinner: NgxSpinnerService
  ) { }

  buscarCNPJ(buscacnpj: any, form: any) {
    if (buscacnpj != null && buscacnpj !== '' && buscacnpj >= 8) {
      this.spinner.show();
      this.cnpjService.consultaCNPJ(buscacnpj).subscribe({
        next: (dados) => {
          console.log(dados);
          this.buscar = true;
          setTimeout(() => {
            this.populaCNPJForm(dados, form);
          }, 100);
          this.spinner.hide();
        },
        error: (e) => {
          this.resetaCNPJForm(form);
          this.buscar = false;
          this.spinner.hide();
          console.log(e);
          this.messageService.add({
            severity: 'error',
            summary: 'Atenção',
            detail: 'Erro ao buscar cnpj!'
          });
        }
      })
    }
  }

  populaCNPJForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      logradouro: dados.logradouro,
      municipio: dados.municipio,
      bairro: dados.bairro,
      uf: dados.uf,
      numero: dados.numero,
      cep: dados.cep,
      complemento: dados.complemento,
      razao_social: dados.razao_social,
      nome_fantasia: dados.nome_fantasia
    })
  }

  resetaCNPJForm(formulario: any) {
    formulario.form.patchValue({
      logradouro: null,
      cidade: null,
      bairro: null,
      estado: null,
      numero: null,
      cep: null,
      complemento: null,
      razao_social: null,
      nome_fantasia: null
    })
  }

  ngOnInit() {
  }

}

