import { Component } from '@angular/core';
import {ComputerhardwarelistService} from "../../services/computerhardwarelist/computerhardwarelist.service";

@Component({
  selector: 'app-computerhardwarelist',

  templateUrl: './computerhardwarelist.component.html',
  styleUrl: './computerhardwarelist.component.css'
})
export class ComputerhardwarelistComponent {
  computerHardwareList: string[] = [];
  computerHardwareName: string = '';

  constructor(private computerHardwareListService: ComputerhardwarelistService) {
  }

  ngOnInit() {
    this.computerHardwareList = this.computerHardwareListService.getComputerHardwares();
  }

  // TODO ADD DATA
  addComputerHardware() {
    console.log(this.addComputerHardware);
    this.computerHardwareListService.addComputerHardware(this.computerHardwareName);
    this.computerHardwareName = '';
  }
}
