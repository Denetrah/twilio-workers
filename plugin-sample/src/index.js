import * as FlexPlugin from '@twilio/flex-plugin';

import SamplePlugin from './SamplePlugin';
import CreateWorkerPlugin from './CreateWorker'


FlexPlugin.loadPlugin(CreateWorkerPlugin)
FlexPlugin.loadPlugin(SamplePlugin);
