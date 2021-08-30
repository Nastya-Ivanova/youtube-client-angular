import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { setCustomCardAction } from '../../../redux/actions/set-custom-card.action';
import { State } from '../../../redux/state.model';
import { generateRandomString } from '../../../utils/generateRandomString';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  customCardForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    imgUrl: new FormControl(''),
    videoUrl: new FormControl(''),
  });

  constructor(private store: Store<State>, private router: Router) {}

  submit() {
    this.store.dispatch(
      setCustomCardAction({
        customCard: {
          id: generateRandomString(),
          title: this.customCardForm.value.title,
          description: this.customCardForm.value.description,
          url: this.customCardForm.value.imgUrl,
          videoUrl: this.customCardForm.value.videoUrl,
          publishedAt: `${new Date()}`,
        },
      }),
    );
    this.router.navigateByUrl('/main');
  }
}
