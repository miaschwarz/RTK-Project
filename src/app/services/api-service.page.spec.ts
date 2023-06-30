import { HttpClientModule } from '@angular/common/http';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { ApiService } from './api-services';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [ApiService]
        });
        service = TestBed.inject(ApiService);

    });

    it('retrieves all users', waitForAsync(inject([ApiService], (apiService: any) => {
        apiService.getUsers().subscribe((result: string | any[]) => expect(result.length).toBeGreaterThan(0)); 
   })));

});
