// Code generated by MockGen. DO NOT EDIT.
// Source: notifier.go
//
// Generated by this command:
//
//	mockgen -source=notifier.go -package=mock -destination=./mock/notifier.go
//

// Package mock is a generated GoMock package.
package mock

import (
	context "context"
	reflect "reflect"

	gomock "go.uber.org/mock/gomock"

	notification "github.com/bucketeer-io/bucketeer/proto/notification"
	sender "github.com/bucketeer-io/bucketeer/proto/notification/sender"
)

// MockNotifier is a mock of Notifier interface.
type MockNotifier struct {
	ctrl     *gomock.Controller
	recorder *MockNotifierMockRecorder
}

// MockNotifierMockRecorder is the mock recorder for MockNotifier.
type MockNotifierMockRecorder struct {
	mock *MockNotifier
}

// NewMockNotifier creates a new mock instance.
func NewMockNotifier(ctrl *gomock.Controller) *MockNotifier {
	mock := &MockNotifier{ctrl: ctrl}
	mock.recorder = &MockNotifierMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockNotifier) EXPECT() *MockNotifierMockRecorder {
	return m.recorder
}

// Notify mocks base method.
func (m *MockNotifier) Notify(ctx context.Context, notification *sender.Notification, recipient *notification.Recipient, language notification.Recipient_Language) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Notify", ctx, notification, recipient, language)
	ret0, _ := ret[0].(error)
	return ret0
}

// Notify indicates an expected call of Notify.
func (mr *MockNotifierMockRecorder) Notify(ctx, notification, recipient, language any) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Notify", reflect.TypeOf((*MockNotifier)(nil).Notify), ctx, notification, recipient, language)
}
