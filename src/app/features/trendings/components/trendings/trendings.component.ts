import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrendingsService } from 'src/app/features/trendings/services/trendings.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-trendings',
  templateUrl: './trendings.component.html',
  styleUrls: ['./trendings.component.css'],
})
export class TrendingsComponent implements OnInit {
  //slider config settings
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeen: 2000,
    dots: true,
    infinite: true,
  };

  // scroll settings
  array: any = [];
  sum = 100;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;

  slides: any = [];

  image = { img: '' };

  backDropSize = 'original';

  backDropUrl = environment.BACK_DROP_IMG_API;

  trendings: any[] = [];

  isEmptyMovies: boolean = true;

  isScrolly: boolean = true;

  pageCount: number = 1;

  type: any;

  constructor(
    private TrendingsService: TrendingsService,
    private spinner: NgxSpinnerService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRouter.data.subscribe((data: any) => {
      this.type = data.type;
    });

    this.getTrendings();
    this.getTodayTrending();
  }
  getTrendings() {
    this.TrendingsService.getTrendings(this.type).subscribe((data: any) => {
      this.trendings = data.results;
    });
  }

  onScrollDown() {
    if (this.isEmptyMovies && this.isScrolly) {
      this.spinner.show();
      this.isScrolly = false;
      this.pageCount++;
      this.loadNextPage();
    }
  }

  loadNextPage() {
    this.TrendingsService.getTrendingsByPage(
      this.pageCount,
      this.type
    ).subscribe((data: any) => {
      const newMovies = data.results;
      this.spinner.hide();
      if (newMovies.length === 0) {
        this.isEmptyMovies = false;
      }
      this.trendings = this.trendings.concat(newMovies);
      this.isScrolly = true;
    });
  }

  getTodayTrending() {
    this.TrendingsService.getTodayTrendings(this.type).subscribe(
      (data: any) => {
        const todayData = data.results;

        for (let td of todayData) {
          this.image = { img: '' };
          this.image.img = `${this.backDropUrl}${this.backDropSize}${td.backdrop_path}`;

          this.slides.push(this.image);
        }
      }
    );
  }
}
