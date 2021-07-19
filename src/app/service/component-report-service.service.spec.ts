import { TestBed } from '@angular/core/testing';

import { ComponentReportServiceService } from './component-report-service.service';

describe('ComponentReportServiceService', () => {
  let service: ComponentReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
