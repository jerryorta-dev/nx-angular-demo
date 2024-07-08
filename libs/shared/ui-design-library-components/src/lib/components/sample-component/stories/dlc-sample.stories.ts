import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { applicationConfig, Meta, StoryObj } from '@storybook/angular';
import { DlcSampleStoriesComponent } from './dlc-sample-stories.component';


const meta: Meta<DlcSampleStoriesComponent> = {
  component: DlcSampleStoriesComponent,
  title: 'Sample Component',
  argTypes: {},
  decorators: [
    applicationConfig({
      providers: [
        provideAnimationsAsync()
      ]
    })
  ]
}

export default meta;
type Story = StoryObj<DlcSampleStoriesComponent>;

export const sample: Story = {
  name: 'Sample Component',
  args: {}
}
