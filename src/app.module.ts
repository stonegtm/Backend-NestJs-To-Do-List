import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToDoListModule } from './modules/to-do-list/to-do-list.module';
import { UsecasesModule } from './usecases/to-do-list/usecases.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `src/config/env/${process.env.NODE_ENV || 'dev'}.env`,
      isGlobal: true, // Make the configuration global if needed
    }),
    ToDoListModule,
    UsecasesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
