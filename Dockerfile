# Build stage
#
FROM maven:3.6.0-jdk-11-slim AS build
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean install

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/SimpleTodo-0.0.1-SNAPSHOT.jar /usr/local/lib/SimpleTodo.jar
ENTRYPOINT ["java","-jar","/usr/local/lib/SimpleTodo.jar"]