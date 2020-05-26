import {
  animate,
  animation,
  AnimationReferenceMetadata,
  keyframes,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const bounceAnimation = animation(
  [
    style([{ opacity: 0 }]),
    animate(
      '{{time}} ease-in-out',
      keyframes([
        style([{ opacity: 0, transform: 'translateY(-500px)' }]),
        style([{ opacity: 1, transform: 'translateY(0)' }]),
        style([{ transform: 'translateY(-65px)' }]),
        style([{ transform: 'translateY(0)' }]),
        style([{ transform: 'translateY(-28px)' }]),
        style([{ transform: 'translateY(0)' }]),
        style([{ transform: 'translateY(-8px)' }]),
        style([{ transform: 'translateY(0)' }]),
      ])
    ),
  ],
  { params: { time: '1s' } }
);

export function useBounceInUpAnimation(
  time: string = '1s'
): AnimationReferenceMetadata {
  return useAnimation(bounceAnimation, { params: { time } });
}

export const bounceInTop = trigger('bounceInTop', [
  transition(':enter', useAnimation(bounceAnimation)),
]);
