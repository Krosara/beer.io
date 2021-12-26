FROM gradle:7-jdk16-openj9 AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build -x test --no-daemon

FROM eclipse-temurin:16.0.2_7-jdk-alpine

EXPOSE 8080

RUN mkdir /app

COPY --from=build /home/gradle/src/build/libs/beer_io-1.0.jar /app/

RUN ls /app

ENTRYPOINT ["java", "-jar","/app/beer_io-1.0.jar"]
