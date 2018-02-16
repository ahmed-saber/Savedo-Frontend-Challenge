import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
// SERVICES
import { ApiHandlerService } from '../services/api-handler.service';

describe('HomeComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                RouterModule,
                NgxPaginationModule,
                HttpClientModule
            ],
            providers: [
                ApiHandlerService
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have getPage() method`, async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.getPage).toBeTruthy();
    }));

    it(`should have getListOfIssues() method`, async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.getListOfIssues).toBeTruthy();
    }));

    it(`should have sortDirection() method`, async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.sortDirection).toBeTruthy();
    }));

    it(`should have sortDirection() to be called`, async(() => {
        const fixture = TestBed.createComponent(HomeComponent);
        const app = fixture.debugElement.componentInstance;
        spyOn(app,'sortDirection');
        app.sortDirection();
        expect(app.sortDirection).toHaveBeenCalled();
    }));
});
