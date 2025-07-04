/**
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { httpQuery, BasePath } from "./base";
import * as app from "./query/app";
import * as selector from "./query/selector";
import * as dashboard from "./query/dashboard";
import * as topology from "./query/topology";
import * as trace from "./query/trace";
import * as log from "./query/log";
import * as profile from "./query/profile";
import * as alarm from "./query/alarm";
import * as event from "./query/event";
import * as ebpf from "./query/ebpf";
import * as demandLog from "./query/demand-log";
import * as asyncProfile from "./query/async-profile";

const query: { [key: string]: string } = {
  ...app,
  ...selector,
  ...dashboard,
  ...topology,
  ...trace,
  ...log,
  ...profile,
  ...alarm,
  ...event,
  ...ebpf,
  ...demandLog,
  ...asyncProfile,
};
class Graphql {
  queryData = "";
  query(data: string) {
    this.queryData = data;
    return this;
  }
  async params(variables: unknown) {
    // const response = await httpQuery({
    //   url: BasePath,
    //   method: "post",
    //   json: {
    //     query: query[this.queryData],
    //     variables,
    //   },
    // });
    // if (response.errors) {
    //   response.errors = response.errors.map((e: { message: string }) => e.message).join(" ");
    // }
    // return response;
    // mock 返回
    switch (this.queryData) {
      case "queryMenuItems":
        return { data: { getMenuItems: [] } };
      case "queryOAPTimeInfo":
        return { data: { getTimeInfo: { timezone: 800 } } };
      case "queryOAPVersion":
        return { data: { version: "mock-version" } };
      case "queryMetricsTTL":
        return { data: { getMetricsTTL: {} } };
      case "queryRecordsTTL":
        return { data: { getRecordsTTL: {} } };
      default:
        return { data: {} };
    }
  }
}

export default new Graphql();
