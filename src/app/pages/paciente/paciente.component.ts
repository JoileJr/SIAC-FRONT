import { PacienteService } from './../../services/paciente/paciente.service';
import { Component, OnInit } from '@angular/core';
import { PessoaDTO } from '../../models/pessoa-dto';
import { PacienteDTO } from '../../models/paciente-dto';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrl: './paciente.component.css'
})
export class PacienteComponent implements OnInit {
  pacientes: PacienteDTO[] = [];
  modalVisivel: boolean = false;
  pacienteSelecionado: PacienteDTO = new PacienteDTO();

  constructor(private pacienteService: PacienteService) {}

  ngOnInit() {
    this.carregarPacientes();
  }

  carregarPacientes() {
    this.pacienteService.getAll().subscribe({
      next: (data) => {
        this.pacientes = data;
      },
      error: (err) => console.error('Erro ao criar pessoa', err)
    });
  }

  editarPaciente(paciente: any) {

    console.log('Editando paciente:', paciente);
  }

  excluirPaciente(paciente: any) {
    console.log('Excluindo paciente:', paciente);
    this.pacientes = this.pacientes.filter(p => p.cpf !== paciente.cpf);
  }

  abrirModal(paciente?: any) {
    this.modalVisivel = true;
    this.pacienteSelecionado = paciente ? paciente : null;
  }

  fecharModal() {
    this.modalVisivel = false;
    this.pacienteSelecionado = new PacienteDTO();
  }

  salvarPaciente(paciente: any) {
    if (this.pacienteSelecionado) {
      const index = this.pacientes.findIndex(p => p.cpf === this.pacienteSelecionado.cpf);
      if (index !== -1) {
        this.pacientes[index] = paciente;
      }
    } else {
      this.pacientes.push(paciente);
    }

    this.fecharModal();
  }

  openEditModal(paciente: PacienteDTO) {
    this.pacienteSelecionado = paciente;
    this.modalVisivel = true;
  }

}
