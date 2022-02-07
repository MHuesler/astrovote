import { FormControl } from '@angular/forms';
import { AuthenticationService } from './../authentication/authentication.service';
import { BackendService } from './../../services/backend.service';
import { EditPostComponent } from './edit-post/edit-post.component';
import { Component, ElementRef, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { TuiDialogService } from '@taiga-ui/core';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { SignInComponent } from '../authentication/sign-in/sign-in.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('createPostInput') createPostInput: ElementRef | undefined;
  filter = new FormControl('top')

  private readonly postDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(EditPostComponent, this.injector),
    {
      dismissible: true,
      label: 'Create Post',
    },
  )

  private readonly signInDialog = this.dialogService.open<number>(
    new PolymorpheusComponent(SignInComponent, this.injector),
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
    this.backend.getPosts();
    this.filter.valueChanges
      .subscribe((val) => {
        switch(val) {
          case 'top': this.backend.getPosts(); break;
          case 'new': this.backend.getPostsByNew(); break;
        }
      })
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
        this.backend.getPosts()
      },
      complete: () => {
        this.backend.getPosts()
      },
    });

    (this.createPostInput as any).focusableElement.nativeElement.blur()
  }

}
