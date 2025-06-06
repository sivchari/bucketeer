import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
  SerializedError
} from '@reduxjs/toolkit';

import * as grpc from '../grpc/eventcounter';
import { ExperimentResult } from '../proto/eventcounter/experiment_result_pb';
import {
  GetExperimentResultRequest,
  GetExperimentResultResponse
} from '../proto/eventcounter/service_pb';

import { AppState } from '.';

const MODULE_NAME = 'experimentResult';

export const experimentResultsAdapter = createEntityAdapter({
  selectId: (experimentResult: ExperimentResult.AsObject) => experimentResult.id
});

export const { selectAll, selectById } =
  experimentResultsAdapter.getSelectors();

const initialState = experimentResultsAdapter.getInitialState<{
  loading: boolean;
  totalCount: number;
  getExperimentResultError: SerializedError | null;
}>({
  loading: false,
  totalCount: 0,
  getExperimentResultError: null
});

export interface GetExperimentResultParams {
  environmentId: string;
  experimentId: string;
}

export const getExperimentResult = createAsyncThunk<
  GetExperimentResultResponse.AsObject,
  GetExperimentResultParams | undefined,
  { state: AppState }
>(`${MODULE_NAME}/getExperimentResult`, async (params) => {
  const request = new GetExperimentResultRequest();
  request.setEnvironmentId(params.environmentId);
  request.setExperimentId(params.experimentId);
  const result = await grpc.getExperimentResult(request);
  return result.response.toObject();
});

export const experimentResultSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getExperimentResult.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExperimentResult.fulfilled, (state, action) => {
        state.loading = false;
        state.getExperimentResultError = null;
        experimentResultsAdapter.upsertOne(
          state,
          action.payload.experimentResult
        );
      })
      .addCase(getExperimentResult.rejected, (state, action) => {
        state.loading = false;
        state.getExperimentResultError = action.error;
      });
  }
});
