import { EditPostComponent } from './edit-post/edit-post.component';
import { Component, ElementRef, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts = [
    {
      userName: "John Doe",
      ticker: "AAPL",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
    {
      userName: "John Doe",
      ticker: "TRT",
      description: "Building higher lows and in a tight range. Acting nice around the 20day MA. Expecing a range...",
      tags: [
        "breakout"
      ],
      rating: 3,
      votes: 15,
      id: Math.floor(Math.random() * 99999)
    },
  ]

  @ViewChild('createPostInput') createPostInput: ElementRef | undefined;

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(EditPostComponent, this.injector),
    {
      dismissible: false,
      label: 'Create Post',
      size: 'fullscreen'
    },
  )

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
  ) { }

  ngOnInit(): void {
  }

  openPostCreationDialog(): void {
    this.dialog.subscribe({
      next: data => {
        console.info('Dialog emitted data = ' + data)
      },
      complete: () => {
        console.info('Dialog closed')
      },
    });
    (this.createPostInput as any).focusableElement.nativeElement.blur()
  }

}
