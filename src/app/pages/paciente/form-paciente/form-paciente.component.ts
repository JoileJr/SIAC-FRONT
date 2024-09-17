import { PessoaDTO } from './../../../models/pessoa-dto';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteDTO } from '../../../models/paciente-dto';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export class FormPacienteComponent implements OnInit {
  @Input() modalVisivel: boolean = false;
  @Input() paciente!: PacienteDTO;
  @Output() fecharModalEvent = new EventEmitter();
  @Output() salvarPacienteEvent = new EventEmitter<any>();

  pacienteForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm(this.paciente);
  }

  initForm(dto: PacienteDTO) {
    this.pacienteForm = this.fb.group({
      nome: [dto.nome, Validators.required],
      cpf: [dto.cpf, Validators.required],
      telefone: [dto.telefone, Validators.required],
      email: [dto.email, [Validators.required, Validators.email]],
      dataNascimento: [dto.dataNascimento, Validators.required]
    });
  }

  fecharModal() {
    this.modalVisivel = false;
    this.pacienteForm.reset();
    this.fecharModalEvent.emit();
  }

  salvarPaciente() {
    if (this.pacienteForm.valid) {
      this.salvarPacienteEvent.emit(this.pacienteForm.value);
      this.fecharModal();
    }
  }

}
