import { SignInDialogComponent } from './../authentication/sign-in-dialog/sign-in-dialog.component';
import { AuthenticationService } from './../authentication/authentication.service';
import { BackendService } from './../../services/backend.service';
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

  @ViewChild('createPostInput') createPostInput: ElementRef | undefined;

  private readonly postDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(EditPostComponent, this.injector),
    {
      dismissible: true,
      label: 'Create Post',
    },
  )

  private readonly signInDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SignInDialogComponent, this.injector),
    {
      dismissible: true,
      label: 'Sign in to create posts',
    },
  )

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    public backend: BackendService,
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.backend.getPosts()
  }

  openPostCreationDialog(): void {
    if (!this.authService.getAuthStatus()) {
      this.signInDialog.subscribe({
        next: data => {
          console.info('Dialog emitted data = ' + data)
        },
        complete: () => {
          console.info('Dialog closed')
        },
      });
      return
    }

    this.postDialog.subscribe({
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
