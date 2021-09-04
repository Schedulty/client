# Schedulty API client

```typescript
import { SchedultyClient } from '@schedulty/client';

const schedulty: SchedultyClient = new SchedultyClient(process.env.SCHEDULTY_TOKEN);

await schedulty.setSchedule({ schedule });
```
