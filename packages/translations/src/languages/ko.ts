import type { DefaultTranslationsObject, Language } from '../types.js'

export const koTranslations: DefaultTranslationsObject = {
  authentication: {
    account: '계정',
    accountOfCurrentUser: '현재 사용자의 계정',
    alreadyActivated: '이미 활성화됨',
    alreadyLoggedIn: '이미 로그인됨',
    apiKey: 'API 키',
    authenticated: '인증됨',
    backToLogin: '로그인 화면으로 돌아가기',
    beginCreateFirstUser: '시작하려면 첫 번째 사용자를 생성하세요.',
    changePassword: '비밀번호 변경',
    checkYourEmailForPasswordReset:
      '비밀번호 재설정을 안전하게 수행할 수 있는 링크가 포함된 이메일을 확인하세요.',
    confirmGeneration: '생성 확인',
    confirmPassword: '비밀번호 확인',
    createFirstUser: '첫 번째 사용자 생성',
    emailNotValid: '입력한 이메일은 유효하지 않습니다.',
    emailSent: '이메일 전송됨',
    emailVerified: '이메일이 성공적으로 인증되었습니다.',
    enableAPIKey: 'API 키 활성화',
    failedToUnlock: '잠금 해제 실패',
    forceUnlock: '강제 잠금 해제',
    forgotPassword: '비밀번호를 잊으셨나요?',
    forgotPasswordEmailInstructions:
      '아래에 이메일을 입력하세요. 비밀번호를 재설정하는 방법에 대한 안내가 포함된 이메일 메시지를 받게 될 것입니다.',
    forgotPasswordQuestion: '비밀번호를 잊으셨나요?',
    generate: '생성',
    generateNewAPIKey: '새로운 API 키 생성',
    generatingNewAPIKeyWillInvalidate:
      '새로운 API 키를 생성하면 이전 키가 무효화됩니다. 계속하시겠습니까?',
    lockUntil: '잠금 시간',
    logBackIn: '다시 로그인',
    logOut: '로그아웃',
    loggedIn: '다른 사용자로 로그인하려면 먼저 <0>로그아웃</0>해야 합니다.',
    loggedInChangePassword:
      '비밀번호를 변경하려면 <0>계정 화면</0>으로 이동하여 비밀번호를 편집하세요.',
    loggedOutInactivity: '보안을 위해 일정 시간 동안 활동하지 않아 로그아웃되었습니다.',
    loggedOutSuccessfully: '로그아웃되었습니다.',
    loggingOut: '로그아웃 중...',
    login: '로그인',
    loginAttempts: '로그인 시도',
    loginUser: '현재 사용자 로그인',
    loginWithAnotherUser: '다른 사용자로 로그인하려면 먼저 <0>로그아웃</0>해야 합니다.',
    logout: '로그아웃',
    logoutSuccessful: '로그아웃 성공.',
    logoutUser: '현재 사용자 로그아웃',
    newAPIKeyGenerated: '새로운 API 키가 생성되었습니다.',
    newAccountCreated:
      '<a href="{{serverURL}}">{{serverURL}}</a>에 접근할 수 있는 새로운 계정이 생성되었습니다. 다음 링크를 클릭하거나 브라우저에 URL을 붙여넣으세요: <a href="{{verificationURL}}">{{verificationURL}}</a><br> 이메일을 확인한 후에 로그인할 수 있습니다.',
    newPassword: '새로운 비밀번호',
    passed: '인증 통과',
    passwordResetSuccessfully: '비밀번호가 성공적으로 재설정되었습니다.',
    resetPassword: '비밀번호 재설정',
    resetPasswordExpiration: '비밀번호 재설정 만료',
    resetPasswordToken: '비밀번호 재설정 토큰',
    resetYourPassword: '비밀번호 재설정',
    stayLoggedIn: '로그인 상태 유지',
    successfullyRegisteredFirstUser: '첫 번째 사용자를 성공적으로 등록했습니다.',
    successfullyUnlocked: '잠금 해제 성공',
    tokenRefreshSuccessful: '토큰 새로 고침이 성공했습니다.',
    unableToVerify: '확인할 수 없음',
    verified: '확인됨',
    verifiedSuccessfully: '성공적으로 확인됨',
    verify: '확인',
    verifyUser: '현재 사용자 확인',
    verifyYourEmail: '이메일을 확인해주세요',
    youAreInactive:
      '잠시 활동하지 않았으며 보안을 위해 곧 자동 로그아웃됩니다. 로그인 상태를 유지하시겠습니까?',
    youAreReceivingResetPassword:
      '당신(혹은 다른 사람)이 계정의 비밀번호 초기화를 요청했기 때문에 이 이메일을 받았습니다. 다음 링크를 클릭하거나 브라우저에 붙여넣어 비밀번호를 초기화하세요:',
    youDidNotRequestPassword:
      '비밀번호 초기화를 요청하지 않았다면 이 이메일을 무시하시고 비밀번호를 변경하지 마세요.',
  },
  error: {
    accountAlreadyActivated: '이 계정은 이미 활성화되었습니다.',
    autosaving: '이 문서를 자동 저장하는 중에 문제가 발생했습니다.',
    correctInvalidFields: '입력하신 내용을 확인해주세요.',
    deletingFile: '파일을 삭제하는 중에 오류가 발생했습니다.',
    deletingTitle:
      '{{title}} 삭제하는 중에 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도하세요.',
    emailOrPasswordIncorrect: '입력한 이메일 또는 비밀번호가 올바르지 않습니다.',
    followingFieldsInvalid_one: '다음 입력란이 유효하지 않습니다:',
    followingFieldsInvalid_other: '다음 입력란이 유효하지 않습니다:',
    incorrectCollection: '잘못된 컬렉션',
    invalidFileType: '잘못된 파일 형식',
    invalidFileTypeValue: '잘못된 파일 형식: {{value}}',
    loadingDocument: 'ID가 {{id}}인 문서를 불러오는 중에 문제가 발생했습니다.',
    localesNotSaved_one: '다음 로케일을 저장할 수 없습니다:',
    localesNotSaved_other: '다음 로케일들을 저장할 수 없습니다:',
    logoutFailed: '로그아웃 실패했습니다.',
    missingEmail: '이메일이 누락되었습니다.',
    missingIDOfDocument: '업데이트할 문서의 ID가 누락되었습니다.',
    missingIDOfVersion: '버전의 ID가 누락되었습니다.',
    missingRequiredData: '필수 데이터가 누락되었습니다.',
    noFilesUploaded: '파일이 업로드되지 않았습니다.',
    noMatchedField: '"{{label}}"에 대한 일치하는 입력란이 없습니다.',
    noUser: '사용자가 없습니다.',
    notAllowedToAccessPage: '이 페이지에 접근할 권한이 없습니다.',
    notAllowedToPerformAction: '이 작업을 수행할 권한이 없습니다.',
    notFound: '요청한 리소스를 찾을 수 없습니다.',
    previewing: '이 문서를 미리보는 중에 문제가 발생했습니다.',
    problemUploadingFile: '파일 업로드 중에 문제가 발생했습니다.',
    tokenInvalidOrExpired: '토큰이 유효하지 않거나 만료되었습니다.',
    tokenNotProvided: '토큰이 제공되지 않았습니다.',
    unPublishingDocument: '이 문서의 게시 취소 중에 문제가 발생했습니다.',
    unableToDeleteCount: '총 {{total}}개 중 {{count}}개의 {{label}}을(를) 삭제할 수 없습니다.',
    unableToUpdateCount: '총 {{total}}개 중 {{count}}개의 {{label}}을(를) 업데이트할 수 없습니다.',
    unauthorized: '권한 없음, 이 요청을 수행하려면 로그인해야 합니다.',
    unknown: '알 수 없는 오류가 발생했습니다.',
    unspecific: '오류가 발생했습니다.',
    userEmailAlreadyRegistered: '주어진 이메일로 이미 등록된 사용자가 있습니다.',
    userLocked: '이 사용자는 로그인 실패 횟수가 너무 많아 잠겼습니다.',
    valueMustBeUnique: '값은 고유해야 합니다.',
    verificationTokenInvalid: '확인 토큰이 유효하지 않습니다.',
  },
  fields: {
    addLabel: '{{label}} 추가',
    addLink: '링크 추가',
    addNew: '새로 추가',
    addNewLabel: '새로운 {{label}} 추가',
    addRelationship: '관계 추가',
    addUpload: '업로드 추가',
    block: '블록',
    blockType: '블록 유형',
    blocks: '블록',
    chooseBetweenCustomTextOrDocument:
      '사용자 지정 텍스트 URL 또는 다른 문서에 링크 중 선택하세요.',
    chooseDocumentToLink: '연결할 문서 선택',
    chooseFromExisting: '기존 항목 중 선택',
    chooseLabel: '{{label}} 선택',
    collapseAll: '모두 접기',
    customURL: '사용자 지정 URL',
    editLabelData: '{{label}} 데이터 수정',
    editLink: '링크 수정',
    editRelationship: '관계 수정',
    enterURL: 'URL 입력',
    internalLink: '내부 링크',
    itemsAndMore: '{{items}} 및 {{count}}개 더',
    labelRelationship: '{{label}} 관계',
    latitude: '위도',
    linkType: '링크 유형',
    linkedTo: '<0>{{label}}</0>에 연결됨',
    longitude: '경도',
    newLabel: '새로운 {{label}}',
    openInNewTab: '새 탭에서 열기',
    passwordsDoNotMatch: '비밀번호가 일치하지 않습니다.',
    relatedDocument: '관련 문서',
    relationTo: '관계',
    removeRelationship: '관계 제거',
    removeUpload: '제거',
    saveChanges: '변경 사항 저장',
    searchForBlock: '블록 검색',
    selectExistingLabel: '기존 {{label}} 선택',
    selectFieldsToEdit: '수정할 입력란 선택',
    showAll: '모두 표시',
    swapRelationship: '관계 교체',
    swapUpload: '업로드 교체',
    textToDisplay: '표시할 텍스트',
    toggleBlock: '블록 토글',
    uploadNewLabel: '새로운 {{label}} 업로드',
  },
  general: {
    aboutToDelete: '{{label}} <1>{{title}}</1>를 삭제하려고 합니다. 계속하시겠습니까?',
    aboutToDeleteCount_many: '{{label}}를 {{count}}개 삭제하려고 합니다.',
    aboutToDeleteCount_one: '{{label}}를 {{count}}개 삭제하려고 합니다.',
    aboutToDeleteCount_other: '{{label}}를 {{count}}개 삭제하려고 합니다.',
    addBelow: '아래에 추가',
    addFilter: '필터 추가',
    adminTheme: '관리자 테마',
    and: '및',
    applyChanges: '변경 사항 적용',
    ascending: '오름차순',
    automatic: '자동 설정',
    backToDashboard: '대시보드로 돌아가기',
    cancel: '취소',
    changesNotSaved: '변경 사항이 저장되지 않았습니다. 지금 떠나면 변경 사항을 잃게 됩니다.',
    close: '닫기',
    collapse: '접기',
    collections: '컬렉션',
    columnToSort: '정렬할 열',
    columns: '열',
    confirm: '확인',
    confirmDeletion: '삭제하시겠습니까?',
    confirmDuplication: '복제하시겠습니까?',
    copied: '복사됨',
    copy: '복사',
    create: '생성',
    createNew: '새로 생성',
    createNewLabel: '새로운 {{label}} 생성',
    created: '생성됨',
    createdAt: '생성 일시',
    creating: '생성 중',
    creatingNewLabel: '{{label}} 생성 중',
    custom: '사용자 정의',
    dark: '다크',
    dashboard: '대시보드',
    delete: '삭제',
    deletedCountSuccessfully: '{{count}}개의 {{label}}를 삭제했습니다.',
    deletedSuccessfully: '삭제되었습니다.',
    deleting: '삭제 중...',
    depth: '깊이',
    descending: '내림차순',
    deselectAllRows: '모든 행 선택 해제',
    document: '문서',
    documents: '문서들',
    duplicate: '복제',
    duplicateWithoutSaving: '변경 사항 저장 없이 복제',
    edit: '수정',
    editLabel: '{{label}} 수정',
    editing: '수정 중',
    editingLabel_many: '{{count}}개의 {{label}} 수정 중',
    editingLabel_one: '{{count}}개의 {{label}} 수정 중',
    editingLabel_other: '{{count}}개의 {{label}} 수정 중',
    email: '이메일',
    emailAddress: '이메일 주소',
    enterAValue: '값을 입력하세요',
    error: '오류',
    errors: '오류',
    fallbackToDefaultLocale: '기본 locale로 대체',
    false: '거짓',
    filter: '필터',
    filterWhere: '{{label}} 필터링 조건',
    filters: '필터',
    globals: '글로벌',
    language: '언어',
    lastModified: '마지막 수정 일시',
    leaveAnyway: '그래도 나가시겠습니까?',
    leaveWithoutSaving: '저장하지 않고 나가기',
    light: '라이트',
    livePreview: '실시간 미리보기',
    loading: '불러오는 중',
    locale: 'locale',
    locales: 'locale',
    menu: '메뉴',
    moveDown: '아래로 이동',
    moveUp: '위로 이동',
    newPassword: '새 비밀번호',
    noFiltersSet: '설정된 필터 없음',
    noLabel: '<{{label}} 없음>',
    noOptions: '옵션 없음',
    noResults:
      '{{label}}를 찾을 수 없습니다. 아직 {{label}}이 없거나 설정한 필터와 일치하는 것이 없습니다.',
    noValue: '값 없음',
    none: '없음',
    notFound: '찾을 수 없음',
    nothingFound: '찾을 수 없습니다',
    of: '의',
    open: '열기',
    or: '또는',
    order: '순서',
    pageNotFound: '페이지를 찾을 수 없음',
    password: '비밀번호',
    payloadSettings: 'Payload 설정',
    perPage: '페이지당 개수: {{limit}}',
    remove: '제거',
    reset: '초기화',
    row: '행',
    rows: '행',
    save: '저장',
    saving: '저장 중...',
    searchBy: '{{label}}로 검색',
    selectAll: '{{count}}개 {{label}} 모두 선택',
    selectAllRows: '모든 행 선택',
    selectValue: '값 선택',
    selectedCount: '{{count}}개의 {{label}} 선택됨',
    showAllLabel: '{{label}} 모두 표시',
    sorryNotFound: '죄송합니다. 요청과 일치하는 항목이 없습니다.',
    sort: '정렬',
    sortByLabelDirection: '{{label}} {{direction}}으로 정렬',
    stayOnThisPage: '이 페이지에 머무르기',
    submissionSuccessful: '제출이 완료되었습니다.',
    submit: '제출',
    submitting: '제출 중...',
    success: '성공',
    successfullyCreated: '{{label}}이(가) 생성되었습니다.',
    successfullyDuplicated: '{{label}}이(가) 복제되었습니다.',
    thisLanguage: '한국어',
    titleDeleted: '{{label}} "{{title}}"을(를) 삭제했습니다.',
    true: '참',
    unauthorized: '권한 없음',
    unsavedChangesDuplicate: '저장되지 않은 변경 사항이 있습니다. 복제를 계속하시겠습니까?',
    untitled: '제목 없음',
    updatedAt: '업데이트 일시',
    updatedCountSuccessfully: '{{count}}개의 {{label}}을(를) 업데이트했습니다.',
    updatedSuccessfully: '성공적으로 업데이트되었습니다.',
    updating: '업데이트 중',
    uploading: '업로드 중',
    user: '사용자',
    users: '사용자',
    value: '값',
    welcome: '환영합니다',
  },
  operators: {
    contains: '포함',
    equals: '같음',
    exists: '존재',
    isGreaterThan: '보다 큼',
    isGreaterThanOrEqualTo: '보다 크거나 같음',
    isIn: '포함됨',
    isLessThan: '보다 작음',
    isLessThanOrEqualTo: '보다 작거나 같음',
    isLike: '유사',
    isNotEqualTo: '같지 않음',
    isNotIn: '포함되지 않음',
    near: '근처',
  },
  upload: {
    crop: '자르기',
    cropToolDescription:
      '선택한 영역의 모퉁이를 드래그하거나 새로운 영역을 그리거나 아래의 값을 조정하세요.',
    dragAndDrop: '파일을 끌어다 놓으세요',
    dragAndDropHere: '또는 여기로 파일을 끌어다 놓으세요',
    editImage: '이미지 수정',
    fileName: '파일 이름',
    fileSize: '파일 크기',
    focalPoint: '초점',
    focalPointDescription: '미리보기에서 초점을 직접 드래그하거나 아래의 값을 조정하세요.',
    height: '높이',
    lessInfo: '정보 숨기기',
    moreInfo: '정보 더보기',
    previewSizes: '미리보기 크기',
    selectCollectionToBrowse: '찾을 컬렉션 선택',
    selectFile: '파일 선택',
    setCropArea: '자르기 영역 설정',
    setFocalPoint: '초점 설정',
    sizes: '크기',
    sizesFor: '{{label}} 크기',
    width: '너비',
  },
  validation: {
    emailAddress: '유효한 이메일 주소를 입력하세요.',
    enterNumber: '유효한 숫자를 입력하세요.',
    fieldHasNo: '이 입력란에는 {{label}}이(가) 없습니다.',
    greaterThanMax: '{{value}}은(는) 최대 허용된 {{label}}인 {{max}}개보다 큽니다.',
    invalidInput: '이 입력란에는 유효하지 않은 입력이 있습니다.',
    invalidSelection: '이 입력란에는 유효하지 않은 선택이 있습니다.',
    invalidSelections: '이 입력란에는 다음과 같은 유효하지 않은 선택 사항이 있습니다:',
    lessThanMin: '{{value}}은(는) 최소 허용된 {{label}}인 {{min}}개보다 작습니다.',
    limitReached: '제한에 도달했습니다. {{max}}개 항목만 추가할 수 있습니다.',
    longerThanMin: '이 값은 최소 길이인 {{minLength}}자보다 길어야 합니다.',
    notValidDate: '"{{value}}"은(는) 유효한 날짜가 아닙니다.',
    required: '이 입력란은 필수입니다.',
    requiresAtLeast: '이 입력란운 최소한 {{count}} {{label}}이 필요합니다.',
    requiresNoMoreThan: '이 입력란은 최대 {{count}} {{label}} 이하이어야 합니다.',
    requiresTwoNumbers: '이 입력란은 두 개의 숫자가 필요합니다.',
    shorterThanMax: '이 값은 최대 길이인 {{maxLength}}자보다 짧아야 합니다.',
    trueOrFalse: '이 입력란은 true 또는 false만 가능합니다.',
    validUploadID: '이 입력란은 유효한 업로드 ID가 아닙니다.',
  },
  version: {
    type: '유형',
    aboutToPublishSelection: '선택한 {{label}}을(를) 게시하려고 합니다. 계속하시겠습니까?',
    aboutToRestore: '이 {{label}} 문서를 {{versionDate}}기준 버전으로 복원하려고 합니다.',
    aboutToRestoreGlobal: '글로벌 {{label}}을(를) {{versionDate}}기준 버전으로 복원하려고 합니다.',
    aboutToRevertToPublished:
      '이 문서의 변경 사항을 게시된 상태로 되돌리려고 합니다. 계속하시겠습니까?',
    aboutToUnpublish: '이 문서를 게시 해제하려고 합니다. 계속하시겠습니까?',
    aboutToUnpublishSelection: '선택한 {{label}}을(를) 게시 해제하려고 합니다. 계속하시겠습니까?',
    autosave: '자동 저장',
    autosavedSuccessfully: '자동 저장이 완료되었습니다.',
    autosavedVersion: '자동 저장된 버전',
    changed: '변경됨',
    compareVersion: '비교할 버전 선택:',
    confirmPublish: '게시하기',
    confirmRevertToSaved: '저장된 상태로 되돌리기',
    confirmUnpublish: '게시 해제하기',
    confirmVersionRestoration: '버전 복원하기',
    currentDocumentStatus: '현재 {{docStatus}} 문서',
    draft: '초안',
    draftSavedSuccessfully: '초안이 저장되었습니다.',
    lastSavedAgo: '마지막으로 저장한지 {{distance}} 전',
    noFurtherVersionsFound: '더 이상의 버전을 찾을 수 없습니다.',
    noRowsFound: '{{label}}을(를) 찾을 수 없음',
    preview: '미리보기',
    problemRestoringVersion: '이 버전을 복원하는 중 문제가 발생했습니다.',
    publish: '게시',
    publishChanges: '변경 사항 게시',
    published: '게시됨',
    publishing: '게시',
    restoreThisVersion: '이 버전 복원',
    restoredSuccessfully: '복원이 완료되었습니다.',
    restoring: '복원 중...',
    revertToPublished: '게시된 상태로 되돌리기',
    reverting: '되돌리는 중...',
    saveDraft: '초안 저장',
    selectLocales: '표시할 locale 선택',
    selectVersionToCompare: '비교할 버전 선택',
    showLocales: 'locale 표시:',
    showingVersionsFor: '다음 버전 표시 중:',
    status: '상태',
    unpublish: '게시 해제',
    unpublishing: '게시 해제 중...',
    version: '버전',
    versionCount_many: '{{count}}개의 버전을 찾았습니다',
    versionCount_none: '버전을 찾을 수 없습니다',
    versionCount_one: '{{count}}개의 버전을 찾았습니다',
    versionCount_other: '{{count}}개의 버전을 찾았습니다',
    versionCreatedOn: '{{version}} 생성 날짜:',
    versionID: '버전 ID',
    versions: '버전',
    viewingVersion: '{{entityLabel}} {{documentTitle}}의 버전 보기',
    viewingVersionGlobal: '글로벌 {{entityLabel}}의 버전 보기',
    viewingVersions: '{{entityLabel}} {{documentTitle}}에 대한 버전 보기',
    viewingVersionsGlobal: '글로벌 {{entityLabel}}에 대한 버전 보기',
  },
}

export const ko: Language = {
  dateFNSKey: 'ko',
  translations: koTranslations,
}