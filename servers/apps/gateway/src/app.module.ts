import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';
import { LoggerModule } from '@app/common/logger';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from './services/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: 'users',
              url: 'http://localhost:3001/graphql',
            },
          ],
        }),
      },
    }),
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
    // GraphQLModule.forRootAsync<ApolloGatewayDriverConfig>({
    //   driver: ApolloGatewayDriver,
    //   useFactory: (configService: ConfigService) => ({
    //     server: { context: authContext },
    //     gateway: {
    //       supergraphSdl: new IntrospectAndCompose({
    //         subgraphs: [
    //           {
    //             name: 'users',
    //             url: configService.getOrThrow('USERS_GRAPHQL_URL'),
    //           },
    //         ],
    //       }),
    //       buildService({ url }) {
    //         return new RemoteGraphQLDataSource({
    //           url,
    //           willSendRequest({ request, context }) {
    //             request.http.headers.set(
    //               'user',
    //               context.user ? JSON.stringify(context.user) : null,
    //             );
    //           },
    //         });
    //       },
    //     },
    //   }),
    //   inject: [ConfigService],
    // }),
    LoggerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
