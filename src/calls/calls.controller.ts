import { Controller, Get, Param, Query } from '@nestjs/common';
import { CallsService } from './calls.service';

@Controller('calls')
export class CallsController {
  constructor(private readonly callsService: CallsService) {}

  @Get(':idClient')
  async getCalls(@Param('idClient') idClient: string, @Query('page') page: number) {
    return this.callsService.getCallsByClientId(idClient, page);
  }
}
