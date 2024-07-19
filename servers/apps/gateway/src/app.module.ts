import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose, RemoteGraphQLDataSource } from '@apollo/gateway';
import { authContext } from './auth.context';
import { LoggerModule } from '@app/common/logger';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    // GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    //   driver: ApolloGatewayDriver,
    //   server: {
    //     context: authContext,
    //   },
    //   gateway: {
    //     supergraphSdl: new IntrospectAndCompose({
    //       subgraphs: [
    //         {
    //           name: 'users',
    //           url: 'http://localhost:3001/graphql',
    //         },
    //       ],
    //     }),
    //     buildService({ url }) {
    //       return new RemoteGraphQLDataSource({
    //         url,
    //         willSendRequest({ request, context }) {
    //           request.http.headers.set(
    //             'user',
    //             context.user ? JSON.stringify(context.user) : null,
    //           );
    //         },
    //       });
    //     },
    //   },
    // }),
    GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      useFactory: (configService: ConfigService) => ({
        gateway: {
          supergraphSdl: new IntrospectAndCompose({
            subgraphs: [
              {
                name: 'users',
                url: configService.getOrThrow('USERS_GRAPHQL_RUL'),
              },
            ],
          }),
          buildService({ url }) {
            return new RemoteGraphQLDataSource({
              url,
              willSendRequest({ request, context }) {
                request.http.headers.set(
                  'user',
                  context.user ? JSON.stringify(context.user) : null,
                );
              },
            });
          },
        },
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
