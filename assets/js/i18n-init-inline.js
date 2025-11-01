// i18next initialization with inline translations
// This avoids CORS/loading issues with external JSON files

const translations = {
  vi: {
    common: {
      homeTitle: "iOS Swift Learning Hub",
      homeSubtitle: "Demo Tương Tác & Kiến Thức Thực Chiến",
      madeWith: "Made with ❤️ for iOS Developers | © 2025",
      visitorCount: "Lượt ghé thăm:",
      home: "Trang chủ"
    },
    index: {
      title: "iOS Swift Learning Hub - Demo Tương Tác",
      welcome: "Chào mừng đến với Learning Hub",
      description: "Tổng hợp các demo tương tác về các vấn đề kỹ thuật iOS/Swift mà tôi gặp phải trong công việc. Học qua hình ảnh và thực hành!",
      swiftui: {
        title: "SwiftUI",
        description: "Các khái niệm và kỹ thuật về SwiftUI",
        geometryReader: "GeometryReader Demo"
      },
      concurrency: {
        title: "Concurrency & GCD",
        description: "Queue, threading và xử lý bất đồng bộ",
        queue: "Queue Demo"
      },
      autoLayout: {
        title: "Auto Layout",
        description: "Priority, constraints và layout dynamics",
        priority: "Auto Layout Priority Demo",
        realWorld: "Real World Stack Demo"
      },
      comingSoon: {
        title: "Coming Soon",
        description: "Thêm nhiều chủ đề khác...",
        status: "Đang phát triển"
      }
    },
    geometry: {
      title: "GeometryReader Demo",
      subtitle: "SwiftUI Layout",
      description: "Khám phá cách GeometryReader hoạt động qua các ví dụ tương tác",
      selectExample: "Chọn ví dụ:",
      basic: "Cơ bản",
      center: "Căn giữa",
      ratio: "Tỷ lệ",
      nested: "Nested",
      widthLabel: "Width:",
      heightLabel: "Height:",
      explanations: {
        basic: "GeometryReader đọc kích thước của container và hiển thị thông tin. Thử thay đổi width/height để thấy giá trị cập nhật!",
        center: "Sử dụng geometry.size để tính toán vị trí chính giữa của view. Circle luôn ở tâm dù container thay đổi kích thước.",
        ratio: "Tạo layout responsive với tỷ lệ phần trăm. Dù kích thước thay đổi, tỷ lệ 30/70 luôn được giữ.",
        nested: "GeometryReader lấy kích thước của container cha trực tiếp (Child), không phải toàn bộ màn hình (Parent). Đây là điểm quan trọng khi làm nested layouts!"
      },
      demoLabels: {
        center: "CENTER",
        parentLabel: "Parent",
        childLabel: "Child"
      }
    },
    queue: {
      title: "Queue Demo",
      subtitle: "GCD & Concurrency",
      mainTitle: "Serial vs Concurrent Queue Demo",
      description: "Visualize cách queue và thread hoạt động trong GCD",
      buttons: {
        run: "Chạy Demo",
        reset: "Reset"
      },
      labels: {
        queueType: "Queue Type:",
        callType: "Call Type:",
        executionLog: "Execution Log:",
        mainThread: "Main Thread",
        serialQueue: "Serial Queue",
        concurrentQueue: "Concurrent Queue"
      },
      options: {
        serialQueue: "Serial Queue",
        concurrentQueue: "Concurrent Queue",
        async: "Async",
        sync: "Sync"
      },
      placeholders: {
        pressRun: "Nhấn \"Chạy Demo\"",
        logWillAppear: "// Log sẽ hiển thị ở đây..."
      },
      logs: {
        mainThreadStarts: "▶️ Main thread starts",
        callQueueAsync: "📤 Call queue.async { Task",
        callQueueSync: "📤 Call queue.sync { Task",
        mainThreadBlocked: "⏸️ Main thread BLOCKED - waiting...",
        mainThreadContinues: "▶️ Main thread continues (not blocked)",
        mainThreadResumes: "▶️ Main thread resumes",
        taskStarts: "🏃 Task A starts executing",
        taskBStarts: "🏃 Task B starts",
        taskBStartsConcurrent: "🏃 Task B starts (concurrent!)",
        taskACompleted: "✅ Task A completed",
        taskBCompleted: "✅ Task B completed",
        allFinished: "🎉 All tasks finished!",
        running: "Running...",
        blocked: "⏸️ BLOCKED",
        continues: "Continues...",
        resumed: "Resumed!",
        completed: "✅ Completed",
        taskQueued: "Task A - Queued",
        taskBQueued: "Task B - Queued",
        taskRunning: "Task A - Running",
        taskBWaiting: "Task B - Waiting",
        taskBRunning: "Task B - Running",
        taskBStillRunning: "Task B - Still Running",
        taskDone: "✅ Task A - Done",
        taskBDone: "✅ Task B - Done"
      },
      explanations: {
        serialAsync: "💡 Async trên Serial Queue:",
        serialAsyncText: "Main thread không bị block, tiếp tục chạy ngay. Tasks trong queue chạy tuần tự, Task B đợi Task A xong.",
        serialSync: "⏸️ Sync trên Serial Queue:",
        serialSyncText: "Main thread BỊ BLOCK cho đến khi task hoàn thành. Tasks vẫn chạy tuần tự.",
        concurrentAsync: "⚡ Async trên Concurrent Queue:",
        concurrentAsyncText: "Main thread không bị block. Nhiều tasks có thể chạy SONG SONG, thứ tự hoàn thành không đảm bảo.",
        concurrentSync: "⏸️ Sync trên Concurrent Queue:",
        concurrentSyncText: "Main thread BỊ BLOCK. Tasks có thể chạy song song nhưng caller phải đợi task đầu tiên hoàn thành."
      }
    },
    autoLayout: {
      title: "Auto Layout Priority Demo",
      pageTitle: "Auto Layout Priority Demo",
      pageSubtitle: "Constraints và Priority",
      mainTitle: "🎯 Auto Layout Priority Demo",
      hugging: {
        title: "📏 Content Hugging Priority (Khi có THÊM không gian)",
        concept: "Khái niệm:",
        conceptText: "Quyết định view nào sẽ bị kéo giãn khi container có thêm không gian.",
        highPriority: "Priority cao:",
        highPriorityText: "Không muốn bị kéo giãn (ôm sát nội dung)",
        lowPriority: "Priority thấp:",
        lowPriorityText: "Sẵn sàng bị kéo giãn"
      },
      compression: {
        title: "🗜️ Content Compression Resistance Priority (Khi THIẾU không gian)",
        concept: "Khái niệm:",
        conceptText: "Quyết định view nào sẽ bị nén nhỏ khi container thiếu không gian.",
        highPriority: "Priority cao:",
        highPriorityText: "Không muốn bị nén (giữ nguyên kích thước)",
        lowPriority: "Priority thấp:",
        lowPriorityText: "Chấp nhận bị nén hoặc cắt bớt"
      },
      labels: {
        containerWidth: "🔧 Độ rộng Container:"
      },
      elements: {
        button: "Button",
        labelText: "Label Text",
        title: "Important Title",
        description: "Long Description Text"
      },
      controls: {
        buttonHugging: "🔴 Button - Hugging Priority",
        labelHugging: "🔵 Label - Hugging Priority",
        titleCompression: "🔴 Title - Compression Resistance",
        descriptionCompression: "🔵 Description - Compression Resistance"
      },
      scenarios: {
        equalPriorityStretch: "Hai view có cùng priority → kéo giãn đều",
        buttonHigherStretch: "Button có priority cao hơn → Label bị kéo giãn nhiều hơn",
        labelHigherStretch: "Label có priority cao hơn → Button bị kéo giãn nhiều hơn",
        equalPriorityCompress: "Hai view có cùng priority → nén đều",
        titleHigherCompress: "Title có priority cao hơn → Description bị nén nhiều hơn",
        descriptionHigherCompress: "Description có priority cao hơn → Title bị nén nhiều hơn"
      }
    },
    realWorldStack: {
      title: "Real World Stack View Demo",
      headerTitle: "Real World Stack Demo",
      mainTitle: "🎯 Bài Toán Thực Tế: Stack View với 2 Button",
      problemTitle: "📋 Mô tả bài toán của bạn",
      structure: "Cấu trúc:",
      goal: "Mục tiêu:",
      goalDesc: "Spacing 20px giữa 2 button, tất cả dồn về bên trái",
      problem: "Vấn đề:",
      problemDesc: "Cần thiết lập priority đúng để đạt được kết quả mong muốn",
      presets: {
        correct: "✅ Cấu hình ĐÚNG",
        wrong1: "❌ Sai: All High Priority",
        wrong2: "❌ Sai: All Low Priority",
        wrong3: "❌ Sai: Button Low Priority"
      },
      demoTitle: "🧪 Thử nghiệm trực tiếp",
      stackWidthLabel: "🔧 Độ rộng Stack View:",
      trailingSpacer: "Trailing Spacer",
      resultPlaceholder: "Kết quả sẽ hiển thị ở đây",
      controls: {
        button1: "🟢 Button 1 - Hugging Priority",
        spacer20: "🟡 Spacer 20px - Hugging Priority",
        button2: "🟢 Button 2 - Hugging Priority",
        trailingSpacer: "🔴 Trailing Spacer - Hugging Priority"
      },
      codeTitle: "💻 Code Implementation (Swift)",
      explanationTitle: "🎓 Giải thích chi tiết",
      explanation: {
        goalsTitle: "🎯 Mục tiêu của từng element:",
        goalsText: "• <strong>Button 1 & 2:</strong> Giữ kích thước tự nhiên (không kéo giãn) → Priority CAO<br>• <strong>Spacer 20px:</strong> Giữ đúng 20px (không kéo giãn) → Priority CAO<br>• <strong>Trailing Spacer:</strong> Kéo giãn để đẩy tất cả sang trái → Priority THẤP",
        howItWorksTitle: "⚡ Content Hugging Priority hoạt động như thế nào:",
        howItWorksText: "• Khi stack view có thêm không gian → element nào có priority THẤP nhất sẽ kéo giãn<br>• Trailing spacer có priority = 1 (thấp nhất) → nó sẽ \"ăn\" hết không gian thừa<br>• Các element khác giữ nguyên kích thước → tạo hiệu ứng \"dồn về trái\"",
        wrongConfigTitle: "❌ Các cấu hình SAI thường gặp:",
        wrongConfigText: "• <strong>Tất cả priority cao:</strong> Không có element nào kéo giãn → không dồn được về trái<br>• <strong>Tất cả priority thấp:</strong> Tất cả đều kéo giãn → button và spacer bị biến dạng<br>• <strong>Button priority thấp:</strong> Button bị kéo giãn → mất tính thẩm mỹ"
      },
      results: {
        perfect: "✅ HOÀN HẢO! Buttons giữ kích thước, trailing spacer kéo giãn, tất cả dồn về trái",
        allHigh: "❌ SAI: Tất cả priority cao, không có element nào kéo giãn được",
        allLow: "❌ SAI: Tất cả priority thấp, buttons và spacer bị kéo giãn",
        buttonLow: "❌ SAI: Button có priority thấp, bị kéo giãn mất hình dạng",
        spacerLow: "⚠️ CẨN THẬN: Spacer có priority thấp, khoảng cách có thể thay đổi",
        suboptimal: "⚠️ Cấu hình chưa tối ưu, hãy thử các preset để thấy sự khác biệt"
      }
    }
  },
  en: {
    common: {
      homeTitle: "iOS Swift Learning Hub",
      homeSubtitle: "Interactive Demos & Real-World Techniques",
      madeWith: "Made with ❤️ for iOS Developers | © 2025",
      visitorCount: "Visits:",
      home: "Home"
    },
    index: {
      title: "iOS Swift Learning Hub - Interactive Demo",
      welcome: "Welcome to Learning Hub",
      description: "A collection of interactive demos about iOS/Swift technical issues I've encountered in real work. Learn through visualization and practice!",
      swiftui: {
        title: "SwiftUI",
        description: "SwiftUI concepts and techniques",
        geometryReader: "GeometryReader Demo"
      },
      concurrency: {
        title: "Concurrency & GCD",
        description: "Queue, threading and async handling",
        queue: "Queue Demo"
      },
      autoLayout: {
        title: "Auto Layout",
        description: "Priority, constraints and layout dynamics",
        priority: "Auto Layout Priority Demo",
        realWorld: "Real World Stack Demo"
      },
      comingSoon: {
        title: "Coming Soon",
        description: "More topics coming...",
        status: "In development"
      }
    },
    geometry: {
      title: "GeometryReader Demo",
      subtitle: "SwiftUI Layout",
      description: "Explore how GeometryReader works through interactive examples",
      selectExample: "Select example:",
      basic: "Basic",
      center: "Center",
      ratio: "Ratio",
      nested: "Nested",
      widthLabel: "Width:",
      heightLabel: "Height:",
      explanations: {
        basic: "GeometryReader reads the size of the container and displays the information. Try changing width/height to see the values update!",
        center: "Use geometry.size to calculate the center position of the view. The circle always stays at the center no matter the container size.",
        ratio: "Create a responsive layout with percentage ratios. Even when the size changes, the 30/70 ratio is always maintained.",
        nested: "GeometryReader gets the size of the direct parent container (Child), not the entire screen (Parent). This is an important point when doing nested layouts!"
      },
      demoLabels: {
        center: "CENTER",
        parentLabel: "Parent",
        childLabel: "Child"
      }
    },
    queue: {
      title: "Queue Demo",
      subtitle: "GCD & Concurrency",
      mainTitle: "Serial vs Concurrent Queue Demo",
      description: "Visualize how queues and threads work in GCD",
      buttons: {
        run: "Run Demo",
        reset: "Reset"
      },
      labels: {
        queueType: "Queue Type:",
        callType: "Call Type:",
        executionLog: "Execution Log:",
        mainThread: "Main Thread",
        serialQueue: "Serial Queue",
        concurrentQueue: "Concurrent Queue"
      },
      options: {
        serialQueue: "Serial Queue",
        concurrentQueue: "Concurrent Queue",
        async: "Async",
        sync: "Sync"
      },
      placeholders: {
        pressRun: "Press \"Run Demo\"",
        logWillAppear: "// Log will appear here..."
      },
      logs: {
        mainThreadStarts: "▶️ Main thread starts",
        callQueueAsync: "📤 Call queue.async { Task",
        callQueueSync: "📤 Call queue.sync { Task",
        mainThreadBlocked: "⏸️ Main thread BLOCKED - waiting...",
        mainThreadContinues: "▶️ Main thread continues (not blocked)",
        mainThreadResumes: "▶️ Main thread resumes",
        taskStarts: "🏃 Task A starts executing",
        taskBStarts: "🏃 Task B starts",
        taskBStartsConcurrent: "🏃 Task B starts (concurrent!)",
        taskACompleted: "✅ Task A completed",
        taskBCompleted: "✅ Task B completed",
        allFinished: "🎉 All tasks finished!",
        running: "Running...",
        blocked: "⏸️ BLOCKED",
        continues: "Continues...",
        resumed: "Resumed!",
        completed: "✅ Completed",
        taskQueued: "Task A - Queued",
        taskBQueued: "Task B - Queued",
        taskRunning: "Task A - Running",
        taskBWaiting: "Task B - Waiting",
        taskBRunning: "Task B - Running",
        taskBStillRunning: "Task B - Still Running",
        taskDone: "✅ Task A - Done",
        taskBDone: "✅ Task B - Done"
      },
      explanations: {
        serialAsync: "💡 Async on Serial Queue:",
        serialAsyncText: "Main thread is not blocked, continues immediately. Tasks in the queue run sequentially, Task B waits for Task A to finish.",
        serialSync: "⏸️ Sync on Serial Queue:",
        serialSyncText: "Main thread is BLOCKED until the task completes. Tasks still run sequentially.",
        concurrentAsync: "⚡ Async on Concurrent Queue:",
        concurrentAsyncText: "Main thread is not blocked. Multiple tasks can run IN PARALLEL, completion order is not guaranteed.",
        concurrentSync: "⏸️ Sync on Concurrent Queue:",
        concurrentSyncText: "Main thread is BLOCKED. Tasks can run in parallel but caller must wait for the first task to complete."
      }
    },
    autoLayout: {
      title: "Auto Layout Priority Demo",
      pageTitle: "Auto Layout Priority Demo",
      pageSubtitle: "Constraints and Priority",
      mainTitle: "🎯 Auto Layout Priority Demo",
      hugging: {
        title: "📏 Content Hugging Priority (When there's EXTRA space)",
        concept: "Concept:",
        conceptText: "Determines which view will be stretched when the container has extra space.",
        highPriority: "High Priority:",
        highPriorityText: "Resists stretching (hugs content tightly)",
        lowPriority: "Low Priority:",
        lowPriorityText: "Willing to stretch"
      },
      compression: {
        title: "🗜️ Content Compression Resistance Priority (When space is LIMITED)",
        concept: "Concept:",
        conceptText: "Determines which view will be compressed when the container lacks space.",
        highPriority: "High Priority:",
        highPriorityText: "Resists compression (maintains size)",
        lowPriority: "Low Priority:",
        lowPriorityText: "Accepts compression or truncation"
      },
      labels: {
        containerWidth: "🔧 Container Width:"
      },
      elements: {
        button: "Button",
        labelText: "Label Text",
        title: "Important Title",
        description: "Long Description Text"
      },
      controls: {
        buttonHugging: "🔴 Button - Hugging Priority",
        labelHugging: "🔵 Label - Hugging Priority",
        titleCompression: "🔴 Title - Compression Resistance",
        descriptionCompression: "🔵 Description - Compression Resistance"
      },
      scenarios: {
        equalPriorityStretch: "Both views have equal priority → stretch evenly",
        buttonHigherStretch: "Button has higher priority → Label stretches more",
        labelHigherStretch: "Label has higher priority → Button stretches more",
        equalPriorityCompress: "Both views have equal priority → compress evenly",
        titleHigherCompress: "Title has higher priority → Description compresses more",
        descriptionHigherCompress: "Description has higher priority → Title compresses more"
      }
    },
    realWorldStack: {
      title: "Real World Stack View Demo",
      headerTitle: "Real World Stack Demo",
      mainTitle: "🎯 Real-World Problem: Stack View with 2 Buttons",
      problemTitle: "📋 Your Problem Description",
      structure: "Structure:",
      goal: "Goal:",
      goalDesc: "20px spacing between 2 buttons, all aligned to the left",
      problem: "Problem:",
      problemDesc: "Need to set priorities correctly to achieve the desired result",
      presets: {
        correct: "✅ CORRECT Configuration",
        wrong1: "❌ Wrong: All High Priority",
        wrong2: "❌ Wrong: All Low Priority",
        wrong3: "❌ Wrong: Button Low Priority"
      },
      demoTitle: "🧪 Interactive Demo",
      stackWidthLabel: "🔧 Stack View Width:",
      trailingSpacer: "Trailing Spacer",
      resultPlaceholder: "Result will be displayed here",
      controls: {
        button1: "🟢 Button 1 - Hugging Priority",
        spacer20: "🟡 Spacer 20px - Hugging Priority",
        button2: "🟢 Button 2 - Hugging Priority",
        trailingSpacer: "🔴 Trailing Spacer - Hugging Priority"
      },
      codeTitle: "💻 Code Implementation (Swift)",
      explanationTitle: "🎓 Detailed Explanation",
      explanation: {
        goalsTitle: "🎯 Goal of each element:",
        goalsText: "• <strong>Button 1 & 2:</strong> Maintain natural size (don't stretch) → HIGH Priority<br>• <strong>Spacer 20px:</strong> Keep exactly 20px (don't stretch) → HIGH Priority<br>• <strong>Trailing Spacer:</strong> Stretch to push everything to the left → LOW Priority",
        howItWorksTitle: "⚡ How Content Hugging Priority works:",
        howItWorksText: "• When stack view has extra space → element with LOWEST priority will stretch<br>• Trailing spacer has priority = 1 (lowest) → it will \"consume\" all extra space<br>• Other elements maintain their size → creates \"align to left\" effect",
        wrongConfigTitle: "❌ Common WRONG configurations:",
        wrongConfigText: "• <strong>All high priority:</strong> No element can stretch → can't align to left<br>• <strong>All low priority:</strong> All stretch → buttons and spacer get distorted<br>• <strong>Button low priority:</strong> Buttons get stretched → lose aesthetics"
      },
      results: {
        perfect: "✅ PERFECT! Buttons maintain size, trailing spacer stretches, everything aligned to left",
        allHigh: "❌ WRONG: All priorities high, no element can stretch",
        allLow: "❌ WRONG: All priorities low, buttons and spacer get stretched",
        buttonLow: "❌ WRONG: Button has low priority, gets stretched and loses shape",
        spacerLow: "⚠️ CAUTION: Spacer has low priority, spacing may change",
        suboptimal: "⚠️ Configuration not optimal, try the presets to see the difference"
      }
    }
  }
};

// Function to update page content with current language
function updatePageLanguage() {
  if (!i18next) {
    console.error('i18next not ready');
    return;
  }

  document.documentElement.lang = i18next.language;

  // Update document title
  const titleKey = document.body.getAttribute('data-page');
  if (titleKey === 'index') {
    document.title = i18next.t('index.title');
  } else if (titleKey === 'realWorldStack') {
    document.title = i18next.t('realWorldStack.title');
  }

  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = i18next.t(key);
    el.textContent = translation;
  });

  // Update all elements with data-i18n-html attribute (for innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const translation = i18next.t(key);
    el.innerHTML = translation;
  });

  // Dispatch event so other scripts can listen
  window.dispatchEvent(new Event('languageChanged'));
}

// Function to change language
function changeLanguage(lang) {
  i18next.changeLanguage(lang, () => {
    localStorage.setItem('i18nextLng', lang);
    updatePageLanguage();
  });
}

// Function to get translation (useful for dynamic content)
function t(key) {
  return i18next.t(key);
}

// Initialize i18next with inline resources
console.log('i18n: Starting initialization...');

i18next.init({
  lng: localStorage.getItem('i18nextLng') || 'vi',
  fallbackLng: 'vi',
  ns: ['translation'],
  defaultNS: 'translation',
  debug: true,
  resources: {
    vi: {
      translation: translations.vi
    },
    en: {
      translation: translations.en
    }
  },
  interpolation: {
    escapeValue: false
  }
}, function(err, t) {
  if (err) {
    console.error('i18next initialization error:', err);
    return;
  }

  console.log('i18n: Initialization complete, updating page...');
  console.log('i18n: Current language:', i18next.language);
  console.log('i18n: Resources loaded:', Object.keys(translations));

  // Update page after i18next is ready
  if (document.readyState === 'loading') {
    console.log('i18n: DOM loading, waiting for DOMContentLoaded...');
    document.addEventListener('DOMContentLoaded', function() {
      console.log('i18n: DOMContentLoaded fired, updating...');
      updatePageLanguage();
    });
  } else {
    // DOM is already loaded
    console.log('i18n: DOM already loaded, updating immediately...');
    updatePageLanguage();
  }
});
